import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'gl';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;