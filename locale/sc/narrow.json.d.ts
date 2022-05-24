import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'sc';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;