import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'cv';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;