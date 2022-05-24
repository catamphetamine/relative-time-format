import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pt-GW';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;