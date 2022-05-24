import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'fo';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;