import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'id';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;