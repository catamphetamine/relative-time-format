import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'sk';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;