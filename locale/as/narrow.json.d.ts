import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'as';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;