import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'si';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;