import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'gl';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;