import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'gl';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;